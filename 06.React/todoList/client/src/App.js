import "./App.css";

import { Header } from "../src/components/Header";
import { Footer } from "./components/Footer";
// import { Spinner } from "./components/Spinner";
import { Table } from "./components/Table";

function App() {
    return (
        <div className="App">
            <Header />

            <main className="main">
                <section className="todo-list-container">
                    <h1>Todo List</h1>

                    <div className="add-btn-container">
                        <button className="btn">+ Add new Todo</button>
                    </div>

                    <div className="table-wrapper">
                        {/* <Spinner /> */}

                        <Table />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default App;
