import { supabase } from "../../../supabase/supabaseClient";

export const fetchCartItems = async (userId: string) => {
  const { data, error } = await supabase
    .from("carts")
    .select("items")
    .eq("user_id", userId)
    .single();

  if (error) {
    console.error("Error fetching cart items:", error);
    return;
  }

  return data;
};
