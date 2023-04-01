import styles from "@/styles/globals.css";
import { Provider } from "react-redux";
import configureStore from "../redux/configureStore";
import { saveState } from "../redux/localStorage";
import Layout from "@/components/Layout";
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
const store = configureStore();
store.subscribe(() => {
    saveState({
        /* example state */
        user: store.getState().user,
        // total:store.getState().total,
    });
});
export default function App({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Layout>
                <NavBar />
                <div className="page-cont">
                    <SideBar />
                    <Component {...pageProps} />
                </div>
            </Layout>
        </Provider>
    );
}
