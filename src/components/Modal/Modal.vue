<template>
  <div class="modal overlay">
    <div class="card">
      <div v-if="header" class="header">
        <span>{{header}}</span>
      </div>
      <div class="content">
        <slot/>
      </div>
      <div class="footer">
        <button class="btn-cancel">Cancel</button>
        <button class="btn-confirm">Confirm</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    header: {
      type: String,
    }
  },
  computed: {
  },
  mounted () {
  },
}
</script>

<style lang='scss'>
  .modal {
    display: flex;
    align-items: center;
    justify-content: center;

    &.overlay {
      background: rgba(50, 50, 50, .5);
      width: 100vw;
      height: 100vh;
      position: fixed;
      left: 0;
      top: 0;
    }

    .card {
      width: calc(100vw - 20px);
      max-width: 500px;;
      background: white;
      border-radius: 5px;
      display: flex;
      flex-flow: column nowrap;

      .header {
        border-bottom: 1px solid rgb(133, 133, 133);
        padding: 20px;
        font-size: 30px;
        // white-space: nowrap;
        // overflow: hidden;
        // text-overflow: ellipsis;

        span {
          font-size: inherit;
        }
      }

      .content {
        flex-grow: 1;
        max-height: 300px;
        // overflow: scroll;
        padding: 20px;
      }

      .footer {
        display: flex;
        flex-flow: row nowrap;
        padding: 15px;

        button {
          flex: 1;
          min-height: 40px;
          border: none;
          border-radius: 5px;
          margin: 5px;

          &.btn-cancel {
            background: rgb(187, 50, 50);
            color: white;
            &:hover {
              background: red;
            }
          }

          &.btn-confirm {
            background: rgb(71, 145, 71);
            color: white;
            &:hover {
              background: rgb(10, 173, 10);
            }
          }
        }
      }
    }

    @media only screen and (max-width:450px) {
      .card {
        max-height: calc(100vh - 20px);
        .content {
          max-height: unset;
          padding: 20px;
        }
      }
    }

    @media only screen and (max-width:350px) {
      .card {
        border-radius: 0;
        max-height: unset;
        max-width: unset;
        height: 100vh;
        width: 100vw;

        .content {
          max-height: unset;
        }

        .header {
          // font-size: 22px;
        }
      }
    }
  }
</style>
