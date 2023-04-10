import {fireEvent, getByTestId, getByText, render, screen, waitFor} from "@testing-library/react";
import Faq from "./index.page";

describe('IndexPage', () => {
    describe('when rendering faqs', () => {
        render(<Faq data={[]}/>)
        it('should render question', async() => {
            const question = screen.getByText('¿Cuántos comics tienen?')
            expect(question).toBeInTheDocument()
            fireEvent.click(question)
            const aswer = await screen.findByText("Actualmente disponemos de toda la colección de Marvel. Algunos ejemplares pueden contar con poca o nula disponibilidad por el momento. Para mas información puede acceder a https://marvel.com")
            expect(aswer).toBeInTheDocument()
        }),
        it('should render question', async () => {
            render(<Faq data={[]}/>)
            const question = screen.getByText('¿Se puede reservar nuevos lanzamientos?')
            expect(question).toBeInTheDocument()
            fireEvent.click(question)
            const aswer = await screen.findByText("Lamentablemente nuestro sitio todavía no acepta reservas anticipadas. Pero nos encontramos trabajando en esa funcionalidad. Seguí nuestro twitter para estar al tanto de las ultimas novedades.")
            expect(aswer).toBeInTheDocument()
        }),
        it('should render question', async () => {
            render(<Faq data={[]}/>)
            const question = screen.getByText('¿Cuanto demoran las entregas?')
            expect(question).toBeInTheDocument()
            fireEvent.click(question)
            const aswer = await screen.findByText("Todas nuestras entregas son enviadas a través de DH-Express, que alcanza a todo el país en 24hs.")
            expect(aswer).toBeInTheDocument()
        }),
        it('should render question', async () => {
            render(<Faq data={[]}/>)
            const question = screen.getByText('¿Qué métodos de pago están disponibles?')
            expect(question).toBeInTheDocument()
            fireEvent.click(question)
            const aswer = await screen.findByText("Solo se aceptan tarjetas de crédito Visa y Mastercard. De momento no aceptamos pagos en efectivo u otros medios.")
            expect(aswer).toBeInTheDocument()
        }),
        it('should render question', async () => {
            render(<Faq data={[]}/>)
            const question = screen.getByText('¿Se aceptan devoluciones?')
            expect(question).toBeInTheDocument()
            fireEvent.click(question)
            const aswer = await screen.findByText("Nuestras compras aceptan devoluciones siempre y cuando el comic se encuentre en su envoltorio original, ya que de otra forma pierden el valor de reventa. Si desea devolverlo y se encuentra en las mismas condiciones en las que fue enviado, comuníquese con el 11-5555-0001 para resolver la devolución.")
            expect(aswer).toBeInTheDocument()
        })
    })
})
