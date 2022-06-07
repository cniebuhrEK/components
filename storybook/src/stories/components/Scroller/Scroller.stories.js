import React from 'react'
import { Scroller } from 'examkrackers-components'
import styled from 'styled-components'

const Container = styled.div`
  height: 320px;
  width: 512px;

  p {
    margin-bottom: 1em;
  }
`

const Template = () => (
  <Container>
    <Scroller>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in metus
        non ex cursus lacinia. Curabitur eleifend magna elit, id tristique sem
        suscipit at. In lacinia eget lorem quis sodales. Pellentesque tempor
        placerat justo tristique ultricies. Quisque id tellus vestibulum,
        sagittis mauris ornare, gravida est. Nunc commodo consequat massa,
        varius venenatis orci ullamcorper sed. Mauris augue mauris, tincidunt
        vitae eleifend quis, laoreet quis quam.
      </p>
      <p>
        Maecenas posuere porta eros in interdum. Duis venenatis, sapien id
        sollicitudin aliquam, enim neque ultricies lectus, vitae commodo turpis
        erat eu nisl. Praesent arcu lectus, pharetra at lobortis ut, auctor in
        eros. Vivamus mattis turpis felis, eget scelerisque sapien sodales quis.
        Mauris tempus tellus tempus vestibulum imperdiet. In in nisi tellus. Sed
        eu iaculis arcu.
      </p>
      <p>
        Pellentesque eget libero consequat, eleifend velit vitae, pellentesque
        quam. Aliquam dictum in purus ut cursus. Sed sit amet fringilla sapien,
        ac varius nisl. In pellentesque nulla vel eros finibus, ut euismod nibh
        viverra. Cras molestie pulvinar risus, sit amet facilisis leo posuere
        sed. Sed tempus dolor eu risus pharetra, aliquet venenatis nulla tempus.
      </p>
      <p>
        Donec at aliquet ipsum. Praesent maximus tellus vulputate, venenatis est
        a, porta justo. Mauris urna dui, tempor eget ex sed, sodales hendrerit
        massa. Morbi tempus sem eu dignissim rhoncus. Maecenas sit amet magna
        dignissim, lacinia metus non, faucibus risus. Nam dignissim, est at
        scelerisque bibendum, lectus justo condimentum quam, rutrum mollis
        tortor tortor vitae nibh.
      </p>
      <p>
        Suspendisse nec diam interdum, malesuada lacus a, eleifend ante. Duis
        quam ex, finibus nec bibendum id, venenatis a tortor. Vestibulum
        fringilla est ac pharetra accumsan. Interdum et malesuada fames ac ante
        ipsum primis in faucibus. Nulla maximus dolor ut aliquam iaculis.
        Curabitur tempus faucibus posuere.
      </p>
      <p>
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent
        pretium quis mauris vitae placerat. Phasellus porttitor non sapien vitae
        volutpat. Aliquam non magna viverra, rhoncus orci ac, tincidunt nibh.
        Sed fermentum ultricies lacus id efficitur. Vestibulum ante ipsum primis
        in faucibus orci luctus et ultrices posuere cubilia curae; Nullam ut
        sapien interdum quam tincidunt ultrices. Nulla eget luctus mi.
      </p>
      <p>
        Integer vestibulum nibh vel convallis sollicitudin. Integer id metus
        ante. Cras tempor id ante nec commodo. Aenean quis est a neque vulputate
        interdum. Praesent dapibus sed dui id dictum. Duis ante neque, volutpat
        ut mauris in, dapibus posuere purus. In at aliquam dolor. Curabitur
        vitae diam at neque cursus tincidunt vitae id tortor. Aenean imperdiet
        lacinia magna sed egestas. Nullam est nulla, sagittis ut condimentum
        vel, tincidunt a purus. Donec dapibus massa et enim rhoncus faucibus.
        Nunc blandit rhoncus massa, et suscipit lectus. Maecenas scelerisque
        nulla in efficitur vestibulum.
      </p>
    </Scroller>
  </Container>
)

export const Default = Template.bind({})

export default {
  title: 'Atoms/Scroller',
  component: Scroller
}
