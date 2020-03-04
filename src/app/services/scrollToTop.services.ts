import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
// import * as $ from 'jquery'

@Injectable()
export class ScrollTopService {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router) {
  }

  setScrollTop() {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.subscribe((event: NavigationEnd) => {
        window.scroll(0, 0);
        // //console.log(document.getElementById("collapsibleNavbar"))
        // document.getElementById("collapsibleNavbar").classList.add("s")
        $("#collapsibleNavbar").removeClass('show')

      });
    }
  }
}