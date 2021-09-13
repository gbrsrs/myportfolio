import React from 'react'

import { GetStaticProps } from 'next'

import styles from '../../styles/ProjectsPage.module.scss'

import { useRouter } from 'next/router'
import type { NextPage } from 'next'
interface Project {
  id: string,
  name: string,
  description: string,
  url: string,
  created_at: string
}

export default function PageProjects({ projects }: { projects: Project[] }) {

    const router = useRouter()

    const [theme, setTheme] = React.useState('light')

    const handleChangeTheme = () => {

      if (theme === 'light') {

        localStorage.setItem('@theme', 'dark')
        setTheme('dark')

      } else {

        localStorage.setItem('@theme', 'light')
        setTheme('light')

      }

    }

    React.useEffect(() => {

      const data = localStorage.getItem('@theme')
      if (data) {

        setTheme(data)

      } else setTheme('light')

    }, [])


    return(
        <div className={`${theme === 'light' ? styles.light : styles.dark} ${styles.container}`}>
            <div className={styles.navbar}>
                <h1>Gabriel</h1>

                <div>

                    <a onClick={(c) => router.push('/')}>Início</a>
                    <a onClick={(c) => router.push('/')}>Sobre</a>
                    <a onClick={(c) => router.push('/')}>Projetos</a>
                    <a onClick={(c) => router.push('/')}>Experiência</a>

                    <svg onClick={handleChangeTheme} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22ZM12 20.5V3.5C14.2543 3.5 16.4163 4.39553 18.0104 5.98959C19.6045 7.58365 20.5 9.74566 20.5 12C20.5 14.2543 19.6045 16.4163 18.0104 18.0104C16.4163 19.6045 14.2543 20.5 12 20.5V20.5Z" fill="black" />
                    </svg>

                </div>

            </div>
            <div className={styles.projects} id="projects">

        {projects.map((a, i) => (

          <div className={styles.box} key={i}>

            <h1>{a.name}</h1>
            <p>{a.description}</p>

            <a onClick={(c) => router.push(`/projects/${a.name}`)}>

              <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.15174 0C5.27595 0 5.39508 0.0493429 5.48291 0.137174C5.57074 0.225005 5.62008 0.344129 5.62008 0.46834V2.3417C5.62008 2.46591 5.57074 2.58504 5.48291 2.67287C5.39508 2.7607 5.27595 2.81004 5.15174 2.81004C5.02753 2.81004 4.90841 2.7607 4.82058 2.67287C4.73274 2.58504 4.6834 2.46591 4.6834 2.3417V0.46834C4.6834 0.344129 4.73274 0.225005 4.82058 0.137174C4.90841 0.0493429 5.02753 0 5.15174 0ZM1.50806 1.50806C1.55156 1.46444 1.60324 1.42984 1.66014 1.40623C1.71704 1.38262 1.77804 1.37046 1.83964 1.37046C1.90124 1.37046 1.96224 1.38262 2.01914 1.40623C2.07604 1.42984 2.12772 1.46444 2.17123 1.50806L3.49569 2.83346C3.54042 2.87666 3.5761 2.92834 3.60065 2.98548C3.62519 3.04262 3.63811 3.10407 3.63865 3.16626C3.63919 3.22845 3.62734 3.29012 3.60379 3.34767C3.58025 3.40523 3.54547 3.45752 3.5015 3.5015C3.45752 3.54547 3.40523 3.58025 3.34767 3.60379C3.29012 3.62734 3.22845 3.63919 3.16626 3.63865C3.10407 3.63811 3.04262 3.62519 2.98548 3.60065C2.92834 3.5761 2.87666 3.54042 2.83346 3.49569L1.50899 2.17123C1.42119 2.0834 1.37187 1.9643 1.37187 1.84011C1.37187 1.71592 1.42119 1.59682 1.50899 1.50899L1.50806 1.50806ZM8.79543 1.50806C8.83904 1.55156 8.87365 1.60324 8.89726 1.66014C8.92087 1.71704 8.93302 1.77804 8.93302 1.83964C8.93302 1.90124 8.92087 1.96224 8.89726 2.01914C8.87365 2.07604 8.83904 2.12772 8.79543 2.17123L7.46909 3.49569C7.42589 3.54042 7.37421 3.5761 7.31707 3.60065C7.25993 3.62519 7.19847 3.63811 7.13629 3.63865C7.0741 3.63919 7.01243 3.62734 6.95487 3.60379C6.89732 3.58025 6.84502 3.54547 6.80105 3.5015C6.75708 3.45752 6.7223 3.40523 6.69875 3.34767C6.6752 3.29012 6.66336 3.22845 6.6639 3.16626C6.66444 3.10407 6.67736 3.04262 6.7019 2.98548C6.72645 2.92834 6.76213 2.87666 6.80686 2.83346L8.13132 1.50899C8.21915 1.42119 8.33825 1.37187 8.46244 1.37187C8.58663 1.37187 8.70573 1.42119 8.79356 1.50899L8.79543 1.50806ZM0 5.15174C0 5.02753 0.0493429 4.90841 0.137174 4.82058C0.225005 4.73274 0.344129 4.6834 0.46834 4.6834H2.3417C2.46591 4.6834 2.58504 4.73274 2.67287 4.82058C2.7607 4.90841 2.81004 5.02753 2.81004 5.15174C2.81004 5.27595 2.7607 5.39508 2.67287 5.48291C2.58504 5.57074 2.46591 5.62008 2.3417 5.62008H0.46834C0.344129 5.62008 0.225005 5.57074 0.137174 5.48291C0.0493429 5.39508 0 5.27595 0 5.15174ZM5.15174 5.65006V14.3237C5.15158 14.4165 5.17895 14.5072 5.2304 14.5844C5.28185 14.6615 5.35506 14.7217 5.44074 14.7572C5.52642 14.7927 5.62072 14.802 5.71168 14.7838C5.80264 14.7657 5.88617 14.721 5.95167 14.6553L8.34957 12.2574C8.70081 11.9061 9.17723 11.7086 9.67404 11.7085H12.7014C12.7986 11.7084 12.8934 11.6781 12.9726 11.6217C13.0518 11.5654 13.1115 11.4857 13.1434 11.3939C13.1753 11.3021 13.1779 11.2026 13.1507 11.1092C13.1235 11.0159 13.068 10.9333 12.9918 10.873L5.91045 5.28194C5.84138 5.22736 5.75832 5.19335 5.6708 5.18382C5.58328 5.17428 5.49485 5.18961 5.41564 5.22804C5.33644 5.26647 5.26967 5.32644 5.22299 5.40109C5.17631 5.47573 5.15162 5.56202 5.15174 5.65006Z" fill="white" />
              </svg>

              Visualizar

            </a>

          </div>

        ))}

      </div>
        </div>
    )

}

export const getStaticProps: GetStaticProps = async () => {

  const data = await fetch("https://api.gbxxy.com/projects/")
  let res = await data.json()

  fetch("https://api.gbxxy.com/details/add-view")

  return {
    props: {
      projects: res.projects
    },
    revalidate: 3600
  }

}
