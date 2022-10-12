import { useEffect, useState } from 'react';
import Item from './Item';
import cardapio from 'data/cardapio.json';
import style from './Itens.module.scss';
import { Cardapio } from 'types/Prato';

interface Props {
    busca: string,
    filtro: number | null,
    ordenador: string
}

export default function Itens(props: Props) {
	const { busca, filtro, ordenador } = props;
	const [lista, setLista] = useState(cardapio);

	function testaBusca(title: string) {
		const regex = new RegExp(busca, 'i');
		return regex.test(title);
	}

	function testaFiltro(id: number | null) {
		if(filtro !== null) return filtro === id;
		return true;
	}

	function ordenar(novaLista: Cardapio) {
		switch (ordenador) {
		case 'porcao':
			return novaLista.sort((a, b) => a.size - b.size);
		case 'qtd_pessoas':
			return novaLista.sort((a, b) => a.serving - b.serving);
		case 'preco':
			return novaLista.sort((a, b) => a.price - b.price);
        
		default:
			return novaLista;
		}
	}

	useEffect(() => {
		const novaLista = cardapio.filter(item => testaBusca(item.title) && testaFiltro(item.category.id));
		setLista(ordenar(novaLista));
	}, [busca, filtro, ordenador]);
    
	return (
		<div className={style.itens}>
			{lista.map(item => (
				<Item key={item.id} {...item} />
			))}
		</div>
	);
}