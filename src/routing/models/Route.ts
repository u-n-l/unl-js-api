import { RouteOverview } from './RouteOverview';

export type Route = {
  name: string;
  overview: RouteOverview;
  start: string;
  end: string;
  segments: string[];
};
