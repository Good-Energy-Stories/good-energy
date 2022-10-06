import * as mainQueries from './queries';
import * as offeringsQueries from './queries/offerings';
import * as pressQueries from './queries/press';
import * as landingPageQueries from './queries/landingPage';

const queries = { ...mainQueries, ...offeringsQueries, ...landingPageQueries };
export { queries };
