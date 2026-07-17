import cn from '@/utils/cn';

export default function Container({ as: Tag = 'div', className, children, ...props }) {
  return (
    <Tag className={cn('mx-auto w-full px-5 sm:px-8 lg:px-14 xl:px-20', className)} {...props}>
      {children}
    </Tag>
  );
}
