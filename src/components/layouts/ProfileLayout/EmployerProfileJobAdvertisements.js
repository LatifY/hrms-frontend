import React from 'react'

import { Segment } from 'semantic-ui-react'
import EmployerProfileJobAdvertisement from './EmployerProfileJobAdvertisement'

export default function EmployerProfileJobAdvertisements({jobAdvertisements}) {
  return (
    <>
      <Segment fluid raised>
        {
          jobAdvertisements?.map((item, index) => (
            <EmployerProfileJobAdvertisement jobAdvertisement={item} key={index} />
          ))
        }
      </Segment>
    </>
  )
}
