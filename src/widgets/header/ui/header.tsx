import cls from './header.module.scss';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useActions } from 'hooks/useActions';
import { Button, ThemeButton } from 'shared/ui/button/button';
import { Progress } from 'shared/ui/progress/progress';
import { Clouds } from 'shared/assets/svg/header';
import { BackIcon, MenuIcon } from 'shared/assets/svg/icons';

const Nav = () => {
    const { percentage, currentQuestion: current } = useTypedSelector(state => state.quiz);
    const { previousQuestion } = useActions();

    const handleBack = () => {
        if (current > 0) previousQuestion();
    }

    return (
        <nav className={cls.nav}>
            <div className={cls.wrapper}>
                <div className={cls.back}>
                    <Button 
                        onClick={handleBack} 
                        disabled={!current} 
                        theme={ThemeButton.CLEAR}
                    > 
                        <BackIcon /> 
                    </Button>
                </div>
                <div className={cls.percentage}>
                    {percentage}%
                </div>
                <div className={cls.menu}>
                    <Button theme={ThemeButton.CLEAR}> 
                        <MenuIcon /> 
                    </Button>
                </div>
                <div className={cls.progress}>
                    <Progress percentage={percentage} />
                </div>
            </div>
        </nav>
    )
}

const Header = () => {
    return (
        <header className={cls.header}>
            <Clouds 
                height={'100%'} 
                style={{ width: 'initial' }} 
                className={cls.background} 
            />
            <Nav />
        </header>
    );
};

export default Header;