import { action, computed, makeObservable, observable } from 'mobx';
import { zeroPad } from '../utils/zeroPad';
import { getFormattedTimestamp, validateEmail } from '../utils';

class DataStore {
  constructor(rootStore) {
    this.rootStore = rootStore;

    makeObservable(this);
  }
  @observable formData = {
    first: '',
    last: '',
    email: '',
    organization: '',
    errors: {
      first: null,
      last: null,
      email: null,
    },
  };

  @observable playbookSections = [];

  @observable playbookNavTableOfContents = null;
  @observable playbookSearchQuery = '';
  @observable playbookLastSearchedQuery = '';
  @observable playbookSearchResults = [];
  @observable playbookSearchContentFilter = null;
  @observable playbookSearchTagFilter = null;

  @observable libraryOfExpertsResults = [];
  @observable libraryOfExpertsCategory = 'individual';
  @observable libraryOfExpertsSortOrder = 'ascending';
  @observable libraryOfExpertsTagFilter = null;

  @observable directory__activeFilters = [];

  @observable media__playbackObject = this.playbackObjectInitial;

  @action.bound setFirstName(name) {
    this.formData.first = name;
  }
  @action.bound setLastName(name) {
    this.formData.last = name;
  }
  @action.bound setOrganization(org) {
    this.formData.organization = org;
  }
  @action.bound setEmail(email) {
    this.formData.email = email;
  }
  @action.bound resetErrors() {
    this.formData.errors = {
      first: null,
      last: null,
      email: null,
    };
  }
  @action.bound validateFormEmail() {
    this.formData.errors.email = validateEmail(this.formData.email)
      ? null
      : 'A valid email is required';
  }
  @action.bound formValidForSubmit() {
    this.validateFormEmail();
    return (
      this.formData.errors.email === null &&
      this.formData.errors.first === null &&
      this.formData.errors.last === null
    );
  }

  @action.bound setLibraryOfExpertsResults(results) {
    this.libraryOfExpertsResults = results;
  }
  @action.bound setLibraryOfExpertsTagFilter(filter) {
    this.libraryOfExpertsTagFilter = filter;
  }

  @action.bound setLibraryOfExpertsCategory(category) {
    this.libraryOfExpertsCategory = category;
  }
  @action.bound setLibraryOfExpertsSortOrder(sortOrder) {
    this.libraryOfExpertsSortOrder = sortOrder;
  }

  @action.bound clearRouteVariablesData() {
    this.libraryOfExpertsResults = [];
  }

  @computed get libraryOfExpertsTags() {
    const tags = [];
    this.libraryOfExpertsResults.forEach((expert) => {
      if (expert?.tags) {
        tags.push(...expert.tags);
      }
    });

    return [...new Set(tags)];
  }

  @computed get filteredLibraryOfExpertsResults() {
    const categoryResults = this.libraryOfExpertsResults.filter(
      ({ expertType }) => {
        return expertType === this.libraryOfExpertsCategory;
      },
    );

    const tagFilteredResults = categoryResults.filter((expert) => {
      if (this.libraryOfExpertsTagFilter === null) {
        return true;
      }
      if (this.libraryOfExpertsTagFilter !== null && expert?.tags) {
        return expert.tags.includes(this.libraryOfExpertsTagFilter);
      } else {
        return false;
      }
    });

    const sortOrderModifier =
      this.libraryOfExpertsSortOrder === 'ascending' ? 1 : -1;

    const alphabeticalSort = (a, b) => {
      if (!a?.name || !b?.name) {
        return 0;
      }
      const firstLastName = a.name.split(' ').at(-1).toUpperCase();
      const secondLastName = b.name.split(' ').at(-1).toUpperCase();
      if (firstLastName < secondLastName) {
        return sortOrderModifier * -1;
      }
      if (firstLastName > secondLastName) {
        return sortOrderModifier * 1;
      }
      return 0;
    };

    return tagFilteredResults.sort(alphabeticalSort);
  }

  @action.bound setPlaybookSections(sections) {
    this.playbookSections = sections;
  }
  @action.bound setPlaybookNavTableOfContents(toc) {
    this.playbookNavTableOfContents = toc;
  }
  @action.bound setPlaybookSearchQuery(query) {
    this.playbookSearchQuery = query;
  }
  @action.bound setPlaybookLastSearchedQuery(query) {
    this.playbookLastSearchedQuery = query;
  }
  @action.bound setPlaybookSearchResults(results) {
    this.playbookSearchResults = results;
  }
  @action.bound setPlaybookSearchContentFilter(filter) {
    this.playbookSearchContentFilter = filter;
  }
  @action.bound setPlaybookSearchTagFilter(filter) {
    this.playbookSearchTagFilter = filter;
  }

  @computed get searchResultsTags() {
    const tags = [];
    this.playbookSearchResults.forEach((result) => {
      if (result?.tags) {
        tags.push(...result.tags);
      }
    });

    return [...new Set(tags)];
  }

  @computed get filteredSearchResults() {
    const contentTypeFilteredSearchResults = this.playbookSearchResults.filter(
      (result) => {
        if (this.playbookSearchContentFilter !== null) {
          return result._type === this.playbookSearchContentFilter;
        }
        return true;
      },
    );

    const tagFilteredSearchResults = contentTypeFilteredSearchResults.filter(
      (result) => {
        if (this.playbookSearchTagFilter === null) {
          return true;
        }
        if (this.playbookSearchTagFilter !== null && result?.tags) {
          return result.tags.includes(this.playbookSearchTagFilter);
        } else {
          return false;
        }
      },
    );

    return tagFilteredSearchResults;
  }
}

export default DataStore;
