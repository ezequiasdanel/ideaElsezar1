import { Fragment } from "react";
import Header from "./componentes/Header/Header"
import { ItemListContainer } from "./componentes/ItemListContainer/ItemListContainer";
import ItemCount from "./componentes/ItemCount/ItemCount";
import { ItemDetailConteiner } from "./componentes/ItemDetailConteiner/ItemDetailConteiner";

function App () {
    return(
        <Fragment>
        <Header />
        <ItemListContainer/>
        <ItemDetailConteiner/>
        </Fragment>
    )
}
export default App;