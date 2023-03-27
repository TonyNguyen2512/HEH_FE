// project import
import ThemeCustomization from 'themes';
import ScrollTop from './components/ScrollTop';
import RouteList from './routes';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (
    <ThemeCustomization>
        <ScrollTop>{RouteList}</ScrollTop>
    </ThemeCustomization>
);

export default App;
