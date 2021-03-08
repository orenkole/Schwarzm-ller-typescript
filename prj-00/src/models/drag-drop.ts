export interface Draggable {
  dragStartHandler(event: DragEvent): void;
  dragEndHandler(event: DragEvent): void;
}

export interface DragTarget {
  // permit the drop
  dragOverHandler(event: DragEvent): void;
  // handle drop
  dropHandler(event: DragEvent): void;
  // giving feedback to user, no drop happens - use to revert visual update
  dragLeaveHandler(event: DragEvent): void;
}
