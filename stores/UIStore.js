import { action, computed, makeObservable, observable } from 'mobx';
import { getRandomColor } from '../utils/getRandomColor';
const DEFAULT_BACKGROUND = '#fff';
const DEFAULT_FILTER = 'all';

class UIStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    makeObservable(this);
  }

  @observable activeFilter = DEFAULT_FILTER;
  lastActiveFilter = DEFAULT_FILTER;

  @observable navOverlayOpen = false;
  @observable playbookNavOverlayOpen = false;

  @observable scrollPosition = 0;
  @observable directory__searchActive = false;
  @observable player__isMinimized = false;

  @observable directory__subscribeFormActive = false;
  @observable directory__subscribeFormSubmitted = false;
  @observable showTutorial = true;
  lastScrollPosition = 0;
  @observable scrollPositionTotal = 0;
  @observable pageHeight = 0;
  @observable pageWidth = 0;
  @action.bound closeNavOverlay() {
    this.navOverlayOpen = false;
  }
  @action.bound openNavOverlay() {
    this.navOverlayOpen = true;
  }
  @action.bound closePlaybookNavOverlay() {
    this.playbookNavOverlayOpen = false;
  }
  @action.bound openPlaybookNavOverlay() {
    this.playbookNavOverlayOpen = true;
  }
  @action.bound setPlayerMinimized(minimized) {
    this.player__isMinimized = minimized;
  }
  @action.bound setSearchModeActive(active) {
    this.directory__searchActive = active;
  }
  @action.bound setSubscribeFormActive(active) {
    this.directory__subscribeFormActive = active;
  }
  @action.bound setSubscribeFormSubmitted(submitted) {
    this.directory__subscribeFormSubmitted = submitted;
  }
  @action.bound goToLastFilter() {
    this.activeFilter = this.lastActiveFilter;
  }
  @action.bound resetActiveFilter(filter) {
    this.activeFilter = DEFAULT_FILTER;
  }

  @action.bound setHidePlayer(state) {
    this.hidePlayer = state;
  }

  @action.bound setBsideActive(active) {
    this.bsideActive = active;
  }

  @action.bound updateWindowHeight(height) {
    this.windowHeight = height;
  }

  @action.bound updateWindowWidth(width) {
    this.windowWidth = width;
  }
  @action.bound updateWindowSize() {
    this.windowHeight = window.innerHeight;
    this.windowWidth = window.innerWidth;
  }
  @computed get windowScrollPositionPixels() {
    return this.scrollPosition * this.pageHeight;
  }
  @action.bound updateScrollPosition(pos) {
    this.requestScrollTick();
  }
  @action.bound setShowTutorial(show) {
    this.showTutorial = show;
  }

  @action.bound getPageHeight() {
    var height = Math.max(
      document.body.scrollHeight,
      document.body.offsetHeight,
    );

    this.pageHeight = height;
  }
  @action.bound clearRouteVariables() {
    this.navOverlayOpen = false;
    this.playbookNavOverlayOpen = false;
  }
  requestScrollTick() {
    if (!this.scroll__ticking) {
      requestAnimationFrame(this.setScrollPosition);
    }
    this.scroll__ticking = true;
  }

  @action.bound scrollToTop() {
    window.scrollTo(0, 0);
  }
  @action.bound scrollToRef(ref) {
    const top = ref.current.offsetTop;

    window.scrollTo({
      top,
      behavior: 'smooth',
    });
  }

  @action.bound setScrollPosition() {
    const winScroll = window.scrollY;

    const height = document.body.clientHeight - this.windowHeight;

    const scrolled = winScroll / height;

    this.lastScrollPosition = this.scrollPosition;
    this.scrollPosition = scrolled;
    this.scroll__ticking = false;
  }

  @action.bound setPlayerColor(color) {
    this.playerColor = color;
  }
  @action.bound setLukeHovered(hovered) {
    this.lukeHovered = hovered;
  }

  @observable windowWidth =
    typeof window !== `undefined` ? window.innerWidth : undefined;
  @observable windowHeight =
    typeof window !== `undefined` ? window.innerHeight : undefined;
}

export default UIStore;
