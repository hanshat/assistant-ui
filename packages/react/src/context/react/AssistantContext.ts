import { createContext, useContext } from "react";
import type { AssistantModelConfigState } from "../stores/AssistantModelConfig";
import type { AssistantToolUIsState } from "../stores/AssistantToolUIs";
import { ReadonlyStore } from "../ReadonlyStore";

export type AssistantContextValue = {
  useModelConfig: ReadonlyStore<AssistantModelConfigState>;
  useToolUIs: ReadonlyStore<AssistantToolUIsState>;
};

export const AssistantContext = createContext<AssistantContextValue | null>(
  null,
);

export const useAssistantContext = (): AssistantContextValue => {
  const context = useContext(AssistantContext);
  if (!context)
    throw new Error(
      "This component must be used within an AssistantRuntimeProvider.",
    );
  return context;
};
