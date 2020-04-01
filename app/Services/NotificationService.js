export default class NotificationService {
  static basic(text = "", title = text) {
    swal.fire({
      title,

      icon: "success",
      showConfirmButton: false
    });
  }

  static Toasty() {
    swal.fire({
      title: "Error",
      text: "hey thats no good",
      icon: "error",
      position: "top-right",
      toast: true,
      showConfirmButton: false,
      timer: 3000
    });
  }

  static async Confirm() {
    let res = await swal.fire({
      title: "Are you sure?",
      text: "you won't be able to undo this",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "green",
      cancelButtonColor: "red",
      confirmButtonText: "Ya delete it!"
    });

    if (res.value) {
      return true;
    } else {
      return false;
    }
  }

  static async inputAction() {
    Swal.mixin({
      input: "text",
      confirmButtonText: "Next &rarr;",
      showCancelButton: true,
      progressSteps: ["1", "2", "3"]
    })
      .queue([
        {
          title: "Question 1",
          text: "Chaining swal2 modals is easy"
        },
        "Question 2",
        "Question 3"
      ])
      .then(result => {
        if (result.value) {
          const answers = JSON.stringify(result.value);
          Swal.fire({
            title: "All done!",
            html: `
            Your answers:
            <pre><code>${answers}</code></pre>
          `,
            confirmButtonText: "Lovely!"
          });
          return answers;
        }
      });
  }

  static async Nyan() {
    Swal.fire({
      title: "Custom width, padding, background.",
      width: 600,
      padding: "3em",
      background: "#fff url(https://sweetalert2.github.io/images/trees.png)",
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://sweetalert2.github.io/images/nyan-cat.gif")
        left top
        no-repeat
      `
    });
  }
}
