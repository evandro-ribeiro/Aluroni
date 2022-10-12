import React from 'react';
import filtros from './filtros.json';
import style from './Filtros.module.scss';

interface Opcao {
    id: number,
    label: string
}

interface Props {
    filtro: number | null,
    setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filtros({ filtro, setFiltro }: Props) {
	function selecionaFiltro(opcao: Opcao) {
		if(filtro === opcao.id) return setFiltro(null);
		return setFiltro(opcao.id);
	}
	return (
		<div className={style.filtros}>
			{filtros.map(opcao => (
				<button 
					className={`${style.filtros__filtro} 
                        ${filtro === opcao.id ? style['filtros__filtro--ativo'] : ''}`} 
					key={opcao.id} 
					onClick={() => selecionaFiltro(opcao)}
				>
					{opcao.label}
				</button>
			))}
		</div>
	);
}