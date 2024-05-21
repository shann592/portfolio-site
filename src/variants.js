const routeVariants = {
  initial: {
    x: '100vw',
  },
  final: {
    x: '0vw',
    transition: {
      type: 'spring',
      mass: 0.4,
    },
  },
}

const childVariants = {
  initial: {
    opacity: 0,
    x: '50px',
  },
  final: {
    opacity: 1,
    x: '0px',
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
}

export { routeVariants, childVariants }
