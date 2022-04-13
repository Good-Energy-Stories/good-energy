import { action, computed, makeObservable, observable } from 'mobx';
import { zeroPad } from '../utils/zeroPad';
import { getFormattedTimestamp, validateEmail } from '../utils';

class DataStore {
  constructor(rootStore) {
    this.rootStore = rootStore;

    makeObservable(this);
  }

  @observable playbookNavTableOfContents = null;
  @observable playbookSearchQuery = '';
  @observable playbookSearchResults = [];

  @observable directory__activeFilters = [];

  @observable media__playbackObject = this.playbackObjectInitial;
  @action.bound setEpisodeStartIndex(index) {
    this.episode__startIndex = index;
  }
  @action.bound setPlaybookNavTableOfContents(toc) {
    this.playbookNavTableOfContents = toc;
  }
  @action.bound setPlaybookSearchQuery(query) {
    this.playbookSearchQuery = query;
  }
  @action.bound setPlaybookSearchResults(results) {
    this.playbookSearchResults = results;
  }
}

export default DataStore;
