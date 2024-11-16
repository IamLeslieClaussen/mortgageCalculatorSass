/*if (isValid) {
    console.log("isValid:", isValid);
    let monthlyPayment = 0;
    let totalRePayment = 0;

    defaultText.classList.add("hide");
    calculationsContainer.classList.add("show");

    if (mortgageType.value === "repayment") {
      const monthlyRate = rate / 12;
      const n = term * 12;
      monthlyPayment =
        (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate), -n);
      totalRePayment = monthlyPayment * n;
    } else if (mortgageType.value === "interest-only") {
      monthlyPayment = (amount * rate) / 12;
      totalRePayment = monthlyPayment * term * 12;
    }

    document.getElementById("result").innerText`$${monthlyPayment.toFixed(2)}`;
    document.getElementById("term-result").innerText`$${totalRePayment.toFixed(
      2
    )}`;
  } else {
    document.getElementById("result").innerText = "";
    document.getElementById("term-result").innerText = "";

    defaultText.classList.remove("hide");
    calculationsContainer.classList.remove("show");
  }
}
document
  .getElementById("main__left__header_button")
  .addEventListener("click", () => {
    document.querySelector(".main__left__form").reset();
    document.getElementById("result").innerText = "";
    document.getElementById("term-result").innerText = "";
    document.querySelectorAll(".form-alert").forEach((alert) => {
      alert.style.display = "none";
    });

    defaultText.classList.remove("hide");
    calculationsContainer.classList.remove("show");

    document.querySelectorAll(".radio-inputs").forEach((div) => {
      div.classList.remove("selected");
    });

    document.querySelectorAll(".form-flex").forEach((el) => {
      el.classList.remove("error");
    });
  });

document.querySelectorAll(".form-alert").forEach((alert) => {
  alert.style.display = "none";
});