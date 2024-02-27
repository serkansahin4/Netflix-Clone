import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
interface Category{
    id:number,
    name:string,
}

interface CategoryProps{
    categories:Category[]
}

const Categories:React.FC<CategoryProps>=({categories})=>{
    return (
        <div className={styles.categories}>
            {
                categories.slice(1,8).map(item=>(
                    <Link key={item.id} href={item.id.toString()} className={styles.category}>{item.name}</Link>
                ))
            }
        </div>
    )

}

export default Categories;