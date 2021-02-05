import AntSvg from '../svg/AntSvg';

const AntGraphic = ( { length, fill, odds, shouldAnimate } ) => {

    const duration = 5 / odds;
    let styles = {
        paddingBottom: `calc(50% + ${length * 4}px)`
    }

    if ( shouldAnimate ) {
        styles.animation = `ant-race ${duration}s forwards`;
        styles.animationTimingFunction = 'ease-in';
    }

    return (
        <div className={ odds ? "ant-graphic is-animated" : "ant-graphic" } style={ styles }>
            <AntSvg fill={fill} />    
        </div>
    );
};
export default AntGraphic;
