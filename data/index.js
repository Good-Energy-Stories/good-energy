import * as mainQueries from './queries';
import * as offeringsQueries from './queries/offerings';
import * as pressQueries from './queries/press';

const queries = { ...mainQueries, ...offeringsQueries, ...pressQueries };
export { queries };
