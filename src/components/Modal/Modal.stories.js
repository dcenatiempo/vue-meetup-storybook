import Modal from './Modal';

export default {
  title: '<Modal>',
  component: Modal,
};

export const defaultProps = () => ({
  components: { Modal },
  data() {
    return {
      header: '',
      content: lorem,
    }
  },
  template: `
  <Modal>
    {{content}}
  </Modal>`,
});

export const withProps = () => ({
  components: { Modal },
  data() {
    return {
      header: 'This is a modal Header!', //really really really long 
      content: lorem,
    }
  },
  template: `
  <Modal
    :header="header"
  >
    {{content}}
  </Modal>`, //+ content + content
});

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt arcu non sodales neque sodales. Maecenas ultricies mi eget mauris pharetra et ultrices neque. Quam viverra orci sagittis eu. Nisl suscipit adipiscing bibendum est ultricies integer. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. In est ante in nibh mauris cursus mattis. Condimentum mattis pellentesque id nibh tortor id aliquet. Tempor commodo ullamcorper a lacus vestibulum sed arcu non. Tortor at risus viverra adipiscing. Lorem ipsum dolor sit amet consectetur adipiscing elit. Nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Eros in cursus turpis massa tincidunt dui ut ornare. Eu augue ut lectus arcu bibendum. Sit amet porttitor eget dolor morbi. Placerat orci nulla pellentesque dignissim. Sit amet luctus venenatis lectus magna. Eget mauris pharetra et ultrices neque ornare aenean.';
