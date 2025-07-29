import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class FeatureFlagService {
  private flags: Record<string, boolean> = {};
  private flags$ = new BehaviorSubject<Record<string, boolean>>(this.flags);

  loadFlags(flags: Record<string, boolean>) {
    this.flags = { ...flags };
    this.flags$.next(this.flags);
  }

  isEnabled(flag: string): boolean {
    return !!this.flags[flag];
  }

  getFlags() {
    return this.flags$.asObservable();
  }

  enable(flag: string) {
    this.flags[flag] = true;
    this.flags$.next(this.flags);
  }

  disable(flag: string) {
    this.flags[flag] = false;
    this.flags$.next(this.flags);
  }
}
