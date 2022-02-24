import { action, computed, makeObservable, observable } from 'mobx';
import { zeroPad } from '../utils/zeroPad';
import { getFormattedTimestamp, validateEmail } from '../utils';

class DataStore {
  constructor(rootStore) {
    this.rootStore = rootStore;

    makeObservable(this);
  }

  @observable directory__activeFilters = [];

  @observable media__playbackObject = this.playbackObjectInitial;
  @action.bound setEpisodeStartIndex(index) {
    this.episode__startIndex = index;
  }
}

export default DataStore;
