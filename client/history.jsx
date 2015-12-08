import createHashHistory from 'history/lib/createHashHistory';
import createMemoryHistory from 'history/lib/createMemoryHistory';

const history = process.env.BROWSER ? createHashHistory({
    queryKey: false
}) : createMemoryHistory();

export default history;
