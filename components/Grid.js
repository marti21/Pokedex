import Link from "next/link";

export default function Grid({ name }) {
    return (
        <>
        <div>
            <Link href={`/pokemon/${name}`} style={{ textDecoration: 'none' }}><h2>{name}</h2></Link>
        </div>

        <style jsx>{`
            h2 {
                text-align: center;
                font-size: 20px;
            }
        `}
        </style>
      </>
      )
}
