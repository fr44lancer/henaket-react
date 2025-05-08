import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { AppLabel } from '../../henaket/AppLabel';
import { Flex } from 'antd';
import { AppIcon } from '../../henaket/AppIcon';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';

export interface AppAccordionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: ReactNode;
  anchor?: string;
  actionVariant?: 'primary' | 'default' | 'link' | 'text' | 'dashed';
  actionButtonLink?: {
    href: string;
    display_text: string;
  };
  actionButtonIcon?: string;
  expandedDescription?: boolean;
  onToggleAccordion?: (expandedDescription: boolean) => void;
  serviceTypeBadge?: {
    background_color: string;
    text_color: string;
    name: string;
  };
}

export const AppAccordion: React.FC<AppAccordionProps> = ({
  title,
  description,
  anchor,
  actionVariant = 'primary',
  actionButtonLink,
  actionButtonIcon = 'keyboard_arrow_right',
  expandedDescription: defaultexpandedDescription = false,
  onToggleAccordion,
  serviceTypeBadge,
}) => {
  const [isexpandedDescription, setIsexpandedDescription] = useState(
    defaultexpandedDescription,
  );
  const descriptionRef = useRef<HTMLDivElement>(null);

  const hasdescription = !!description;

  useEffect(() => {
    if (!descriptionRef.current) return;

    const el = descriptionRef.current;
    if (isexpandedDescription) {
      el.style.height = el.scrollHeight + 'px';
      el.style.visibility = 'visible';
    } else {
      el.style.height = '0';
      el.style.visibility = 'hidden';
    }
  }, [isexpandedDescription]);

  const toggleAccordion = () => {
    if (!hasdescription) return;
    const next = !isexpandedDescription;
    setIsexpandedDescription(next);
    onToggleAccordion?.(next);
  };

  const showAccordionStatusIndicator = hasdescription || !serviceTypeBadge;

  return (
    <article
      id={anchor}
      className="app-accordion w-full flex flex-col bg-white"
    >
      <header
        className={`w-full flex border border-text-300 rounded-[3px] ${
          isexpandedDescription ? 'rounded-b-none' : ''
        }`}
      >
        {serviceTypeBadge && (
          <div className="bg-primary rounded-l-sm basis-2" />
        )}

        <button
          type="button"
          onClick={toggleAccordion}
          className={`flex-1 flex gap-2 md:gap-4 items-center text-left transition-all z-10 ${
            isexpandedDescription
              ? 'bg-green-300 hover:bg-green-200'
              : 'hover:bg-text-200'
          } ${serviceTypeBadge ? 'rounded-r-sm' : 'rounded-sm'} ${
            !hasdescription ? 'pointer-events-none' : ''
          }`}
        >
          <Flex
            align={'center'}
            justify={'space-between'}
            className={'w-full min-w-[700px]'}
          >
            <Flex justify={'start'} align={'center'} gap={16} className={'p-3'}>
              {showAccordionStatusIndicator && (
                <div className="relative w-5 h-5 md:w-6 md:h-6 shrink-0 basis-auto p-3">
                  <PlusOutlined
                    className={`absolute inset-0 transition-opacity text-lg ${
                      isexpandedDescription ? 'opacity-0' : 'opacity-70'
                    }`}
                  />
                  <MinusOutlined
                    className={`absolute inset-0 transition-opacity text-lg  ${
                      isexpandedDescription ? 'opacity-70' : 'opacity-0'
                    }`}
                  />
                </div>
              )}

              <div className="flex flex-col gap-2 items-start">
                {serviceTypeBadge && (
                  <AppLabel>{serviceTypeBadge.name}</AppLabel>
                )}
                <h6 className="text-text-800 font-normal break-words">
                  {title}
                </h6>
              </div>
            </Flex>
            {actionButtonLink && (
              <Flex
                align={'center'}
                justify={'center'}
                gap={8}
                className={'bg-primary p-3'}
              >
                <p className={'text-white'}>{actionButtonLink.display_text}</p>
                {actionButtonIcon && (
                  <AppIcon
                    icon={'chevron_right'}
                    size={'30px'}
                    className={'text-white'}
                  />
                )}
              </Flex>
            )}
          </Flex>
        </button>
      </header>

      <section
        ref={descriptionRef}
        className="origin-top overflow-hidden duration-300 transition-[height,visibility]"
        style={{ height: 0, visibility: 'hidden' }}
      >
        <div className="p-4 pl-4 md:pl-14 rounded-b border border-t-0 border-text-300">
          {description}
        </div>
      </section>
    </article>
  );
};
