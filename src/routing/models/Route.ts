import { RouteOverview } from './RouteOverview';
import { Segment } from './Segment';

export type Route = {
  name: string;
  overview: RouteOverview;
  start: string;
  end: string;
  segments: Segment;
};
