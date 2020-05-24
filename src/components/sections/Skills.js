import React from 'react'
import Typography from '@material-ui/core/Typography';
import './styles/Skills.css'
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import { TradContext } from '../../contexts/TradContext';
import { skillsData, techData } from '../../data/SkillsData'

const useStyles = makeStyles((theme) => ({
    root: {
        height: 180,
    },
    container: {
        display: 'flex',
    },
    paper: {
        // margin: theme.spacing(1),
        width: 200,
        position: 'absolute',
        cursor: 'default',
        top: "100%",
        left: "50%",
        transform: "translateX(-50%) !important",
        zIndex: 1
    },
    typo: {
        padding: theme.spacing(1),
    },
    svg: {
        width: 100,
        height: 100,
    },
    polygon: {
        fill: theme.palette.common.white,
        stroke: theme.palette.divider,
        strokeWidth: 1,
    },
}));

const iconsSize = "90px"

const Skills = () => {
    const classes = useStyles();
    let lang = React.useContext(TradContext);

    const [state, setState] = React.useState({
        htmlIcon: false,
        cssIcon: false,
        jsIcon: false,
        pythonIcon: false,
        reactIcon: false,
        webglIcon: false,
        firebaseIcon: false,
    })
    const handleChange = (e) => {
        // Get second class of icon
        const target = e.currentTarget.getAttribute('class').split(' ')[1]
        setState({
            htmlIcon: false,
            cssIcon: false,
            jsIcon: false,
            pythonIcon: false,
            [target]: !state[target]
        })
    }
    return (
        <section className="skills">

            {lang === "ENG"
                ? <>
                    <h2>Hi, I'm Aurélien. Welcome to my portfolio !</h2>
                    <Typography paragraph className="skillsDescription">
                        I love programming since 2012, I first started by doing small CLI projects that was useful only for me (usually made with Batch or Visual Basic),
                        then begun using python, to do more helpful applications. I've recently begun to learn web development, I just love it.
        </Typography>
                </>
                : <>
                    <h2>Je m'appelle Aurélien. Bienvenue !</h2>
                    <Typography paragraph className="skillsDescription">
                        J'adore programmer depuis 2012, j'ai d'abbords commencé par faire des petits projets "CLI" à des fins personnels (fait en Batch ou Visual Basic),
                        puis j'ai decouvert Python ce qui m'as permis de faire des projets personnels plus complexes. J'ai recemment debuté le devellopement web, j'adore ça!
        </Typography>
                </>
            }


            {lang === "ENG"
                ? <>
                    <h2>My skills</h2>
                    <h4>The langages I speak</h4>
                </>
                : <>
                    <h2>Mes compétences</h2>
                    <h4>Les langages dont je parle</h4>
                </>
            }
            <div className="skillsCtnr">
                {skillsData.map(skill => {
                    return (
                        <div key={skill.imgId} className={`icon ${skill.iconClass}`} onClick={handleChange}>
                            <img src={skill.iconSrc} id={skill.imgId} alt={`${skill.imgAlt} icon`} width={iconsSize} height={iconsSize}></img>
                            <span className="tooltiptext">{skill.title}</span>
                            <Grow in={state[skill.iconClass]}>
                                <Paper elevation={4} className={classes.paper}>
                                    <Typography className={classes.typo}>
                                        {skill.title}
                                    </Typography>
                                    <Divider />
                                    <Typography className={classes.typo}>
                                        {lang === "ENG"
                                            ? skill.textENG
                                            : skill.textFR
                                        }
                                    </Typography>
                                </Paper>
                            </Grow>
                        </div>
                    )
                })}
            </div>

            {lang === "ENG"
                ? <h4>Technologies I am using</h4>
                : <h4>Les technologies que j'utilise</h4>
            }
            <div className="techCtnr">
                {techData.map(tech => {
                    return (
                        <div key={tech.imgId} className={`icon ${tech.iconClass}`} onClick={handleChange}>
                            {
                                tech.title === 'Firebase'
                                    ? <img src={tech.iconSrc} id={tech.imgId} alt={`${tech.imgAlt} icon`} width={64} height={87}></img>
                                    : <img src={tech.iconSrc} id={tech.imgId} alt={`${tech.imgAlt} icon`} width={iconsSize} height={iconsSize}></img>
                            }
                            <span className="tooltiptext">{tech.title}</span>
                            <Grow in={state[tech.iconClass]}>
                                <Paper elevation={4} className={classes.paper}>
                                    <Typography className={classes.typo}>
                                        {tech.title}
                                    </Typography>
                                    <Divider />
                                    <Typography className={classes.typo}>
                                        {lang === "ENG"
                                            ? tech.textENG
                                            : tech.textFR
                                        }
                                    </Typography>
                                </Paper>
                            </Grow>
                        </div>
                    )
                })}
            </div>
        </section>
    )

}

export default Skills