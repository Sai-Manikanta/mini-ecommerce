import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';

// Pages components
import Home from './pages/Home';
import Product from './pages/Product';
import Cart from './pages/Cart';

function App() {
    return (
        <div className="border p-8">
            <Header />
            <div className="mt-8">
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/product/:productId" component={Product} />
                    <Route path="/cart" component={Cart} />
                </Switch>
            </div>
        </div>
    )
}

export default App
