import Valisneria from '../assets/img/tienda/valisneria.jpg'
import HJava from '../assets/img/tienda/helechojava.jpg'
import Cabomba from '../assets/img/tienda/cabomba.jpg'
import Elodea from '../assets/img/tienda/elodea.jpg'
import Potus from '../assets/img/tienda/potus-en-agua.jpg'
import Camalote from '../assets/img/tienda/camalote.jpg'
import Salvinia from '../assets/img/tienda/Salvinia.jpg'
import HelechoS from '../assets/img/tienda/helecho-sumatra.jpg'
import Lirio from '../assets/img/tienda/liriodeagua.jpg'
import Hygrophila from '../assets/img/tienda/Hygrophilapolysperma.jpg'
import Sagitariasubulata from '../assets/img/tienda/sagitariasubulata.jpg'
import Echinodorus from '../assets/img/tienda/echinodorus.jpg'

export const productosHC = [
        { id:"1", nombre:" Valisneria", "descripcion":"Esta planta, puede reproducirse de dos formas: por flores y estolones. Cuando las condiciones son propicias para la vallisneria, genera flores, cuyos tallos largos llegan a la superficie y emergen. Pero como norma general se reproducirán en el 90% de las veces es mediante estolones.", precio: "250", img: Valisneria, cantidad:"781", tipo: "fondo" },
        { id:"2", nombre:" Helecho de java", "descripcion":"El helecho de Java es muy fácil de reproducir. Puedes arrancar una parte del rizoma y volver a fijarlo a un objeto del acuario o esperar hasta que la planta madre forme plantas hijas. Las plantas hijas se reconocen por los esquejes que se forman en las puntas de las hojas.", precio:"270", img: HJava, cantidad:"501", tipo: "piedra" },
        { id:"3", nombre:"Cabomba", "descripcion":"La Cabomba caroliniana procede de América Central. Es una planta de tallos que puede alcanzar hasta los 80 cm. En acuarios su desarrollo no será superior a los 30 o 40 cm. Su tallo se presenta largo y fino con hojas también finas repartidas por todo lo largo de su extensión. Sus hojas de color verde intenso la convierten en una planta muy atractiva para el acuario.", precio:"310", img: Cabomba, cantidad:"1", tipo: "fondo" },
        { id:"4", nombre:" Elodea", "descripcion":"Se usa en acuariofilia, para oxigenar estanques y acuarios. Ocupa masas de agua de temperaturas moderadas y limpias, de pH neutro y bien iluminadas. El factor limitante es la temperatura.", precio:"240", img: Elodea, cantidad:"1", tipo: "fondo" },
        { id:"5", nombre:"Potus de Agua", "descripcion":"El potus es una planta tropical que se adapta muy bien al interior de casa y al hidrocultivo. Solo hay que introducir el extremo de un tallo en agua y en pocas semanas comenzará a producir raíces. Poco después, crecerán nuevas hojas y el tallo se irá alargando.", precio:"210", img: Potus, cantidad:"1000", tipo: "palustre" },
        { id:"6", nombre:"Camalote", "descripcion":"Al bloquear el paso de la luz, limita el crecimiento de otras plantas acuáticas y algas, además de detener o dificultar la circulación del agua. Reducen la temperatura del agua, toman sus nutrientes y pueden llegar a consumir el oxígeno de la misma.", precio:"370", img: Camalote, cantidad:"4441", tipo: "flote" },
        { id:"7", nombre:"Salvinia Natans", "descripcion":"pequeñas, flotantes con tallos trepadores, ramificados, pilosos sin ser verdaderas raíces. Las hojas de a 3, con 2 verdes, sésiles o córtamente pecioladas, achatadas, enteras, flotantes, 1 hoja finamente diseccionada, peciolada, parecida a una raíz, y pendiente. Las hojas sumergidas tienen soros que están rodeados por membranas basifijadas indusia", precio:"610", img: Salvinia, cantidad:"991", tipo: "flote" },
        { id:"8", nombre:"Helecho de Sumatra", "descripcion":"Dada su forma, esta planta es a veces confundida con una planta de otra familia: Hygrophila difformis, conocida comúnmente como “Sinema”. La diferencia principal es que las hojas en C. Thalictroides nacen de la base y aunque algunas de ellas lleguen a parecer tallos en plantas desarrolladas, parecerían varios tallos; mientras que en H.", precio:"420", img: HelechoS, cantidad:"1", tipo: "fondo" },
        { id:"9", nombre:"Lirio de Agua", "descripcion":"es una planta que pertenece a la familia de las Aráceas y es originaria de Sudáfrica, más precisamente de la región del Cabo. Su nombre científico es Zantedeschia aethiopica y, además de los nombres anteriores, en algunos lugares también es conocida como Alcatraz, Aro de Etiopía y Cartucho.", precio:"540", img: Lirio, cantidad:"100", tipo: "palustre" },
        { id:"10", nombre:"Hygrophila polysperma", "descripcion":"Está dentro de las plantas de acuario más resistentes y se origina del sudeste asiático. El tallo es de 25-40 cm y 4-8 cm de ancho. Es una planta particularmente buena para los principiantes, ya que crece en casi todas las condiciones. Por lo general, crece tan rápido que es importante realizar podas constantes para que no tape otras plantas.", precio:"660", img: Hygrophila, cantidad:"16654", tipo: "fondo" },
        { id:"11", nombre:"Sagitaria subulata", "descripcion":"Conocida como sagittaria enana es una planta tapizante de crecimiento rápido y fácil mantenimiento. Es similar a las Echinodorus tenellus con hojas mas grandes, pero la sagittaria puede crecer en acuarios con iluminación mas moderada y sin adición de Co2. Definitivamente una planta apta para casi cualquier acuario, permitiendo tapizar todo el frente sin espacios libres.", precio:"430", img: Sagitariasubulata, cantidad:"10", tipo: "fondo" },
        { id:"12", nombre:"Echinodorus", "descripcion":"Las Echinodorus forman un grupo de plantas de grandes dimensiones que se emplean para personalizar zonas determinadas del acuario debido a su gran porte. No se colocan formando grupos ya que además de por su tamaño compiten entre ellas por los nutrientes. Por lo general ocupan el plano medio del acuario no empleándose como plantas de fondo a pesar de su porte.", precio:"500", img: Echinodorus, cantidad:"70", tipo: "fondo" },
    ];

export const GetProductos = (iditem) => {
    if (!iditem){
        return new Promise((res) => {
            setTimeout(() => {
                res(productosHC);
            }, 2000);
        });
    }else{
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(productosHC.find((item) => item.id == iditem));
            }, 2000);
        });
    }
    
};

