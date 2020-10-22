import React from "react";
import { useRouter } from "next/router";

const PortfolioDetail = () => {
  const router = useRouter();

  const { id } = router.query;

  return <div>Id:{id}</div>;
};

export default PortfolioDetail;
