import React from 'react'
import config from '../config'
import Proj_item from './Proj_item'
import Section_title from './Section_title'

function Project() {
    const paytm_desc=`A payment app which allowa the register user to do transaction witing the users. It user the concept of ${'Transaction  and Session'} in DBMS.  `
    const diary_desc='It is a blogging application where user can post their daily life personal happining and maintain a personal online diary.'
    const face_desc='A python based application which marks the attendence of student based on the face recognition .I saves time of students as well as students and one can get the soft copy of the attendence too.'
      return (
        <>
            <Section_title title={'PROJECTS'}/>
          <div className='flex flex-col gap-9 w-4/5 md:pl-36'>

            <ol className="relative border-s border-gray-200 dark:border-gray-700 ">
                 <Proj_item title={'paytm-lite'} description={paytm_desc} url={config.paytm_url} skills={'mongodb ,  Nodejs , React , tailwind , express'} ></Proj_item>
                 <Proj_item title={'Daily Diary (on going)'} description={diary_desc} url={config.blog_url} skills={'Posgrese SQL,  Nodejs , React , tailwind , hono , cloudflare , type script'} ></Proj_item>
                 <Proj_item title={'face_Attendence'} description={face_desc} url={config.face_attendence_url} skills={'python , Face_recognition , computer vision'} ></Proj_item>
            </ol>

        </div>
        </>
    )

}

export default Project






