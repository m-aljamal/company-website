import { ourServicesText } from "src/text/homePage"

 
export default function Services({locale}) {
    const {title, services} = ourServicesText[locale]
    return (
        <section className='bg-darkBlue py-8'>
            <div className='container'>

            <h2 className='text-3xl text-liteGreen text-center'>{title}</h2>
            <div>
                {services.map((s)=>
                <div key={s.title} className='bg-crame'>
                    <h2>{s.title}</h2>
                    <p>{s.body}</p>
                </div>
                )}
            </div>
            </div>
        </section>
    )
}
