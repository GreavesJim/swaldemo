export default class NotificationService {
  static basic(text = "", title = text) {
    swal.fire({
      title,
      text,
      icon: "success",
      showConfirmButton: false,
    });
  }

  static Toasty() {
    swal.fire({
      title: "Error",
      text: "hey thats no good",
      icon: "error",
      position: "center-end",
      toast: true,
      showConfirmButton: false,
      timer: 3000,
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
      confirmButtonText: "Ya delete it!",
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
      progressSteps: ["1", "2", "3"],
    })
      .queue([
        {
          title: "Question 1",
          text: "Chaining swal2 modals is easy",
        },
        "Question 2",
        "Question 3",
      ])
      .then((result) => {
        if (result.value) {
          const answers = JSON.stringify(result.value);
          Swal.fire({
            title: "All done!",
            html: `
            Your answers:
            <pre><code>${answers}</code></pre>
          `,
            confirmButtonText: "Lovely!",
          });
          return answers;
        }
      });
  }

  static async Nyan() {
    Swal.fire({
      color: "orange",
      title: "Custom alert",
      width: 600,
      padding: "10em",
      position: "bottom",
      background:
        "lightblue url(https://png2.cleanpng.com/sh/f1a9dc729fdde7963d035fdcbe8f067a/L0KzQYm3VsI6N5lmj5H0aYP2gLBuTgBqgJZxRdN7dD3ldbLrTgBifKVqitC2Y4X3dX7uiP90fF46eqUBZXXnSIqBVMQ1OF8AT6ICNEC0QIK8U8A0Omc8TKYBMkO6PsH1h5==/kisspng-pixel-art-bead-pattern-cute-ghost-5b36eed8984440.9707401015303267446237.png) no-repeat 100px 50px/200px 200px",
      backdrop: `
        rgba(0,0,123,0.4)
        url("https://thumbs.gfycat.com/UnrulyGrossGhostshrimp-small.gif")
        top
        no-repeat
      `,
    });
  }
}
