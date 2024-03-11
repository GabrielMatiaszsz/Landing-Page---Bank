export function Header() {
    return (
        <header className="bg-orange-600 p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
            <div className="text-white text-xl font-bold">Logo</div>
            <a href="#" className="text-white hover:text-gray-200">Clique aqui</a>
            <a href="#" className="text-white hover:text-gray-200">Compre agora</a>
            <a href="#" className="text-white hover:text-gray-200">Assine seu plano</a>
        </div>
        <div>
            <button className="bg-white text-itau-orange px-4 py-2 rounded-md font-semibold">Login</button>
        </div>
    </header>
    )

}