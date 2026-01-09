import {
    Plus,
    Trash2,
    ShoppingCart,
    Refrigerator,
    Clock,
    ChevronRight,
    UtensilsCrossed
} from 'lucide-react';

export const CozinhaScreen = () => {
    const inventory = [
        { name: "Leite Integral", status: "Vencendo hoje", color: "#FFDEE2" },
        { name: "Peito de Frango", status: "Na geladeira", color: "#E3F2FD" },
    ];

    const shoppingList = ["Pão Integral", "Maçãs", "Azeite"];

    return (
        <div className="p-4 flex flex-col gap-6">
            <header className="py-4">
                <h1 className="text-3xl font-bold">Minha Cozinha</h1>
                <p className="text-muted text-lg">O que temos para hoje?</p>
            </header>

            {/* Suggested Meal */}
            <div className="card-base bg-green-50 flex items-center gap-4">
                <div className="bg-green-100 p-4 rounded-full text-primary">
                    <UtensilsCrossed size={32} />
                </div>
                <div>
                    <h3 className="font-bold text-xl">Sugestão de Almoço</h3>
                    <p className="text-muted">Canja de galinha com legumes</p>
                </div>
            </div>

            <section>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Despensa & Geladeira</h2>
                    <button className="text-primary font-bold flex items-center gap-1">
                        <Plus size={20} /> Adicionar
                    </button>
                </div>
                <div className="flex flex-col gap-2">
                    {inventory.map((item, i) => (
                        <div key={i} className="card-base flex items-center justify-between py-4" style={{ backgroundColor: item.color + '44' }}>
                            <div className="flex items-center gap-4">
                                <div className="bg-white p-2 rounded-lg shadow-sm">
                                    <Refrigerator size={24} className="text-gray-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold">{item.name}</h4>
                                    <div className="flex items-center gap-1 text-sm text-red-600 font-medium">
                                        <Clock size={14} /> {item.status}
                                    </div>
                                </div>
                            </div>
                            <ChevronRight className="text-gray-300" />
                        </div>
                    ))}
                </div>
            </section>

            <section>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Lista de Compras</h2>
                    <button className="bg-primary text-white p-2 rounded-full">
                        <ShoppingCart size={24} />
                    </button>
                </div>
                <div className="card-base p-0 overflow-hidden">
                    {shoppingList.map((item, i) => (
                        <div key={i} className={`flex items-center justify-between p-4 ${i !== shoppingList.length - 1 ? 'border-b border-gray-100' : ''}`}>
                            <span className="text-lg font-medium">{item}</span>
                            <button className="text-gray-300 hover:text-red-500">
                                <Trash2 size={20} />
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            <button className="button-base button-primary w-full mt-4">
                Enviar Lista para WhtasApp
            </button>
        </div>
    );
};
