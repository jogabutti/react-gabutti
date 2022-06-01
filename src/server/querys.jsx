import {
    collection,
    doc,
    getDoc,
    getFirestore,
    query,
    /* addDoc, */
    where,
    getDocs
} from 'firebase/firestore'

require("./initialize")

const db=getFirestore();

export const fetchCategories = async () => {
    const categoriesCollection = collection(db, "categories");
    const response = await getDocs(categoriesCollection);
    return response
}

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

export const fetchItemById = async (itemId) => {
    const item = doc(db, "items", itemId);
    let response = await getDoc(item)
    return response    
}
