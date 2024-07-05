import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function App() {
    return (
        <div className={'container'}>
            <Header/>
            <Menu/>
            <Footer/>
        </div>
    )
}

function Header() {
    const style = {color: "#edc84b", fontsize: "54px", textTransform: "uppercase"};
    return (
        <header className={'header'}>
            <h1 style={style}>Fast React Pizza CO.</h1>
        </header>
    )
}

function Menu() {
    const pizzas = pizzaData;
    const numPizzas = pizzas.length;
    return (
        <div className={'menu'}>
            <h2>Our menu</h2>
            {numPizzas > 0 ?
                <>
                    <p>
                        Ẩm thực Ý đích thực. 6 món ăn sáng tạo để lựa chọn. Tất cả
                        từ lò nướng đá của chúng tôi, tất cả đều hữu cơ, tất cả đều ngon.
                    </p>
                    <ul className={"pizzas"}>
                        {pizzas.map((pizza) =>
                            <Pizza pizzaObj={pizza} key={pizza.name}/>
                        )}
                    </ul>
                </>
                : <p>We are still working on our menu. Please come back later</p>}

            {/*<Pizza name='Pizza spinaci'*/}
            {/*       ingredients='Tomato, mozarella, spinach, and ricotta cheese'*/}
            {/*       photoName='pizzas/spinaci.jpg'*/}
            {/*       price={10}/>*/}
            {/*<Pizza name='Pizza Funghi'*/}
            {/*       ingredients='Tomato, mushrooms'*/}
            {/*       photoName='pizzas/funghi.jpg'*/}
            {/*       price={12}/>*/}
        </div>
    )
}

function Pizza({pizzaObj}) {
    console.log(pizzaObj);

    // if (pizzaObj.soldOut) return null;
    return (
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name}/>
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                <span>{pizzaObj.soldOut ? "Sold out" : pizzaObj.price}</span>
            </div>
        </li>
    )
}

function Footer() {
    const hour = new Date().getHours();
    const openHour = 6;
    const closeHour = 17;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);

    // if(!isOpen) return <p>CLOSED</p>

    return (
        <footer className={'footer'}>
            {isOpen ? (
                <Order closerHours={closeHour}/>
            ) : <p>We are happy to welcome between {openHour}:00 and {closeHour}:00</p>}
        </footer>
    )
}

function Order(props) {
    return (
        <div className={"order"}>
            <p>
                We are open until until {props.closerHours}:00. Come visit us or order online.
            </p>
            <button className={"btn"}>Order</button>
        </div>
    )
}

//React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

//React before v18
// React.render(<App/>, document.getElementById('root'));