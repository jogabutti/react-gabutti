import {
    collection,
    doc,
    getDoc,
    getFirestore,
    query,
    addDoc, 
    where,
    getDocs,
	Timestamp,
	updateDoc,
} from 'firebase/firestore'

require("./initialize")

const db=getFirestore();
//Trae todas las categorias
export const fetchCategories = async () => {
    const categoriesCollection = collection(db, "categories");
    const response = await getDocs(categoriesCollection);
    return response
}
//Trae todos los items o por categoria si se le pasa el idCategoria
export const fetchItems = async (categoryId) => {
    let response ;
    const itemsCollection = collection(db, "items");
    if (categoryId) {
        const q = query(
            itemsCollection,
            where("category", "==", categoryId.toLowerCase())
        );
        response = await getDocs(q)
    } else {
        response = await getDocs(itemsCollection)
    };
    return response
}
//Trae un item por id
export const fetchItemById = async (itemId) => {
    const item = doc(db, "items", itemId);
    let response = await getDoc(item)
    return response    
}

// Genera la orden de compra
export const generateOrder = async (order) => {
	const newOrder = addDoc(collection(db, "orders"), {
		...order,
		date: Timestamp.fromDate(new Date()),
	})
	return newOrder
}

// Resta el stock
export const updateStock = async (itemId, quantity) => {
	const item = await getDoc(doc(db, "items", itemId))
	await updateDoc(doc(db, "items", itemId), {
		stock: item.data().stock - quantity,
	})
}

