import { action, makeObservable, observable } from 'mobx';
import { RootStore } from './RootStore';

class UIStore {
  root: RootStore;
  scroll__ticking: boolean;
  constructor(root: RootStore) {
    this.root = root;
    makeObservable(this);
  }

  @observable navOverlayOpen = false;
  @observable playbookNavOverlayOpen = false;

  @observable scrollPosition = 0;

  @observable directory__subscribeFormActive = false;
  @observable directory__subscribeFormSubmitted = false;
  lastScrollPosition = 0;
  @observable scrollPositionTotal = 0;

  @action.bound toggleNavOverlay() {
    if (this.navOverlayOpen) {
      this.closeNavOverlay();
    } else {
      this.openNavOverlay();
    }
  }

  protected openNavOverlay() {
    this.navOverlayOpen = true;
  }
  protected closeNavOverlay() {
    this.navOverlayOpen = false;
    this.playbookNavOverlayOpen = false;
  }

  @action.bound togglePlaybookNavOverlay() {
    if (this.playbookNavOverlayOpen) {
      this.closePlaybookNavOverlay();
    } else {
      this.openPlaybookNavOverlay();
    }
  }

  protected closePlaybookNavOverlay() {
    this.playbookNavOverlayOpen = false;
  }
  protected openPlaybookNavOverlay() {
    this.playbookNavOverlayOpen = true;
  }

  @action.bound setSubscribeFormActive(active) {
    this.directory__subscribeFormActive = active;
  }
  @action.bound setSubscribeFormSubmitted(submitted) {
    this.directory__subscribeFormSubmitted = submitted;
  }

  @action.bound clearRouteVariables() {
    this.navOverlayOpen = false;
    this.playbookNavOverlayOpen = false;
  }

  @action.bound scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @action.bound scrollToRef(ref) {
    const top = ref.current.offsetTop;
    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  }
}

export default UIStore;
