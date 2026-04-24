interface ProgressBarProps {
  value: number;
  max: number;
  color?: string;
  showLabel?: boolean;
  size?: 'sm' | 'md';
}

export default function ProgressBar({
  value,
  max,
  color = 'bg-primary-500',
  showLabel = true,
  size = 'md',
}: ProgressBarProps) {
  const percent = max > 0 ? Math.min((value / max) * 100, 100) : 0;
  const isOver = value > max;
  const barColor = isOver ? 'bg-red-500' : color;
  const height = size === 'sm' ? 'h-1.5' : 'h-2.5';

  return (
    <div className="w-full">
      <div className={`w-full bg-gray-200 rounded-full ${height}`}>
        <div
          className={`${barColor} ${height} rounded-full transition-all duration-300`}
          style={{ width: `${percent}%` }}
        />
      </div>
      {showLabel && (
        <div className="flex justify-between mt-1 text-xs text-gray-500">
          <span className={isOver ? 'text-red-500 font-medium' : ''}>{value}</span>
          <span>{max}</span>
        </div>
      )}
    </div>
  );
}
