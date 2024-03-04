import classNames from 'classnames/bind';
import styles from './CommonSection.module.scss';

import { Container } from 'reactstrap';

const cx = classNames.bind(styles);

function CommonSection(props) {
    return (
        <section className={cx('common__section')}>
            <Container>
                <h2 className="text-white">{props.title}</h2>
            </Container>
        </section>
    );
}

export default CommonSection;
