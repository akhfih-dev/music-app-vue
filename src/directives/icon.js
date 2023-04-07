export default {
  beforeMount(el, binding) {
    let iconClass = `fa-${binding.value} float-right text-green-400 text-xl`;

    if (binding.arg === "full") {
      iconClass = binding.value;
    }

    el.innerHTML += `<i class="fa ${iconClass} "></i>`;
  },
};
