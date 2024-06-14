"use client"
import { useRouter } from "next/router"
import CustomButton from "../customButton/CustomButton"
import "./saibaMaisCursos.css"
import Link from "next/link"



export default function SaibaMaisCursos(){
   
    return(
        <section className="info__cursos">
            <div className="info__cursos__contain">
                <h2 className="info__cursos_title">Venha também aprender conosco em nossos cursos!</h2>
                <Link href="/cursos"><CustomButton className="info__cursos__btn">Saiba mais</CustomButton></Link>
            </div>
        </section>
    )
}