import { Prato } from 'types/Prato';
import style from './TagsPrato.module.scss';

export default function TagsPrato({ category, size, serving, price }: Prato) {
	return (
		<div className={style.tags__tags}>
			<div className={`${style.tags__tipo} ${style[`tags__tipo__${category.label.toLowerCase()}`]}`}>
				{category.label}
			</div>
			<div className={style.tags__porcao}>
				{size}g
			</div>
			<div className={style.tags__qtdpessoas}>
				Serve {serving} pessoa{serving === 1 ? '' : 's'}
			</div>
			<div className={style.tags__valor}>
				R$ {price.toFixed(2)}
			</div>
		</div>
	);
}