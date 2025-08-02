import { useState, useEffect, useCallback } from "react";

const useMountEdit = (min, max, onToggleCoverage) => {
  const [mount, setMount] = useState(min);

  useEffect(() => {
    if (onToggleCoverage) {
      if (mount > 16000) {
        onToggleCoverage("crash", false);
      }
    }
  }, [mount, onToggleCoverage]);

  const MountIncrease = useCallback(() => {
    if (mount + 100 <= max) {
      setMount(mount + 100);
    }
  }, [max, mount]);

  const MountDecrease = useCallback(() => {
    if (mount - 100 >= min) {
      setMount(mount - 100);
    }
  }, [min, mount]);

  return {
    mount,
    MountDecrease,
    MountIncrease,
  };
};

export default useMountEdit;
